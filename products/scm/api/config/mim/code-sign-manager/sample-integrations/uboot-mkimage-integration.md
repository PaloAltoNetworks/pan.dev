---
id: code-sign-client-uboot-mkimage-integration
title: "Integrating with U-Boot and mkimage"
sidebar_label: "Integrating with U-Boot and mkimage"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

## Overview

U-Boot is a popular open-source bootloader for embedded devices. It uses the `mkimage` tool to create bootable firmware images. `mkimage` supports the PKCS#11 standard, allowing it to sign these images using keys managed by the Code Sign Client.

This guide will provide a complete example of how to create and sign a U-Boot image using `mkimage` with a key from the Code Signing capability.

## Before you begin

This guide assumes you are working in a Linux environment and have the necessary build tools (such as git & make) installed. You will also need:

- **p11-kit and GnuTLS (p11tool) packages installed** 
- **Code Sign Client installed**

## How do I get started?

This process involves compiling the U-Boot tools, finding your signing key, defining an image, and finally, building and signing it.

## Step 1: Create a module file to allow using PKCS11 driver with p11-kit

echo "module: /opt/venafi/codesign/lib/venafipkcs11.so" > /usr/share/p11-kit/modules/venafi.module

## Step 2: Download and build the U-Boot tools

```
git clone https://source.denx.de/u-boot/u-boot.git
cd u-boot

make xconfig
# Apply the appropriate options needed for your specific project. The defaults are sufficient for signing.

make tools
# If prompted for a SYS_LOAD_ADDR or TEXT_BASE value, enter the appropriate addresses for your project. If uncertain, enter 0x0 and press Enter.
```

## Step 3: Find the URL to use for signing

```
# Find the relevant token
p11tool --list-tokens

# Find the relevant private key URL.
p11tool --login --list-privkeys "pkcs11:model=TPP;manufacturer=Venafi%2C%20Inc.;serial=1234;token=Remote%20Token"
```

## Step 4: Create the .its file that defines the image.

In this example, the file should be named `kernel.its`.

```
/* Example U-Boot uImage source file containing a Linux kernel */

/dts-v1/;
    / {
        description = "My Linux kernel";
        #address-cells = <1>;
        images {
            kernel {
                description = "My Linux kernel";
                data = /incbin/("./vmlinuz-linux");
                type = "kernel";
                arch = "x86_64";
                os = "linux";
                compression = "gzip";
                load = <00000000>;
                entry = <00000000>;
                hash-1 {
                    algo = "crc32";
                };
                hash-2 {
                    algo = "sha1";
                };
                signature {
                    algo = "sha256,rsa4096";
                };
            };
        };

        configurations {
            default = "config-1";
            config-1 {
                description = "Boot Linux kernel";
                kernel = "kernel";
            };
        };
    };
```

## Step 5: Copy a kernel image into the current directory to used in the image

In this example, the kernel from the Linux computer you currently-booted from is used. In a real world situation, you should use your boot image. The filename needs to match the filename referenced in the .its file.

```
cp /boot/vmlinuz-linux .
```

## Step 6: Create and sign the image

The "signature" section in the .its file must match the key being used:

```
./mkimage -f ./kernel.its -k "model=TPP;manufacturer=Venafi%2C%20Inc.;serial=1234;token=Remote%20Token;id=%54%65%73%74%69%6E%67%2D%52%53%41%34%30%39%36;object=Testing-RSA4096;type=private" -N pkcs11 -r kernel.itb
```

## Step 7: List the header information for the new image to verify the signature value

The "signature" section in the .its file must match the key being used:

```
./mkimage -l kernel.itb
```

## Related information

The `mkimage` tool has many command-line parameters. Here is the output from its usage help for reference.

```
Usage: ./mkimage -l image
-l ==> list image header information
./mkimage [-x] -A arch -O os -T type -C comp -a addr -e ep -n name -d data_file[:data_file...] image
-A ==> set architecture to 'arch'
-O ==> set operating system to 'os'
-T ==> set image type to 'type'
-C ==> set compression type 'comp'
-a ==> set load address to 'addr' (hex)
-e ==> set entry point to 'ep' (hex)
-n ==> set image name to 'name'
-d ==> use image data from 'datafile'
-x ==> set XIP (execute in place)
./mkimage [-D dtc_options] [-f fit-image.its|-f auto|-F] [-b <dtb> [-b <dtb>]] [-E] [-B size] [-i <ramdisk.cpio.gz>] fit-image
<dtb> file is used with -f auto, it may occur multiple times.
-D => set all options for device tree compiler
-f => input filename for FIT source
-i => input filename for ramdisk file
-E => place data outside of the FIT structure
-B => align size in hex for FIT structure and header
Signing / verified boot options: [-k keydir] [-K dtb] [ -c <comment>] [-p addr] [-r] [-N engine]
-k => set directory containing private keys
-K => write public keys to this .dtb file
-G => use this signing key (in lieu of -k)
-c => add comment in signature node
-F => re-sign existing FIT image
-p => place external data at a static position
-r => mark keys used as 'required' in dtb
-N => openssl engine to use for signing
./mkimage -V ==> print version information and exit
Use '-T list' to see a list of available image types
```

For more information, see [the U-Boot documentation](http://www.denx.de/wiki/U-Boot).
