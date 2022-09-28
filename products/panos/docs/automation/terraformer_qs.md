---
id: terraformer_qs
title: Terraformer Container
sidebar_label: Terraformer Container
hide_title: true
hide_table_of_contents: true
---


Terraformer Container
-------------------------------------------------------------


Overview
========

The objective for the Terraformer Docker Container are as follows:

 - Enable the easy dump of configurations from Palo Alto Network Firewalls.
   
 - Provide a pre-packaged runtime wherein environment and package dependencies are addressed 
   and managed on behalf of the user of the container. 
   
 - Ensure the latest Terraformer code base is used in the deployments. 
 

Steps to use the Terraformer Container 
==============================================================================

0. Pre-requisites 

   __NOTE__ Credentials for the Palo Alto Network Firewalls are required 
   
   - Please ensure the following:
    
     a. You have a file named: ```provider.tf```
     b. The contents of the file should be as follows:
     
        ```
            terraform {
              required_providers {
                panos = {
                  source = "PaloAltoNetworks/panos"
                }
              }
              required_version = ">= 0.13"
            }
        ```

   - __Recommendation__ Place the files in a dedicated directory.

1. Install Terraform on your machine. 

2. Download (pull) the Terraformer Docker Image

   ```sh    
   $ docker pull troissixzero/terraformer
     
   ```

3. Download the Terraform PAN-OS provider

   ```sh    
   $ terraform init
     
   ```

4. Run the image as a docker container with the following command:
 
   __NOTE__: Please note the -v option in the command below, which maps a local directory 
             into the container; and the -e option to pass an environment variables. Please
             set your variables accordingly to your environment.
 
   ```sh
   $ docker run --rm \
    -e PANOS_HOSTNAME=192.168.1.1 \
    -e PANOS_USERNAME=admin \
    -e PANOS_PASSWORD=admin \
    -v $(pwd)/.terraform:/root/.terraform \
    -v $(pwd)/.terraform.d:/root/.terraform.d \
    -v $(pwd)/generated:/root/generated \
    troissixzero/terraformer:latest import panos -r device_config,firewall_networking,firewall_objects,firewall_policy
    ```

   __NOTE__: This will run the container dump the configuration of the Palo Alto Network firewall
             in the ```generated/panos``` folder in the current directory.

5. __Convert the files to be compatible with Terraform > 0.13

    __NOTE__: Terraform is not natively fully compatible with Terraform > 0.13 for now.
              Some easy steps permit to convert the generated files to Terraform > 0.13 format.

   ```sh
   $ cd generated/panos/vsys1/device_config
   $ cp ../../../../provider.tf provider.tf
   $ terraform state replace-provider -auto-approve registry.terraform.io/-/panos PaloAltoNetworks/panos
   $ cd ../firewall_networking
   $ cp ../../../../provider.tf provider.tf
   $ terraform state replace-provider -auto-approve registry.terraform.io/-/panos PaloAltoNetworks/panos
   $ cd ../firewall_objects
   $ cp ../../../../provider.tf provider.tf
   $ terraform state replace-provider -auto-approve registry.terraform.io/-/panos PaloAltoNetworks/panos
   $ cd ..firewall_policy
   $ cp ../../../../provider.tf provider.tf
   $ terraform state replace-provider -auto-approve registry.terraform.io/-/panos PaloAltoNetworks/panos
    ```
6. __Use your Terraform files

    __NOTE__: you will have to launch ```terraform init``` generated/panos/vsys1/device_config or any other
              generated directory (```generated/panos/vsys1/{device_config,firewall_networking,firewall_objects,firewall_policy}```)
              before using ```terraform plan``` or any other Terraform command.
