import { cn } from "../../util.js";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";

export function PartnerTools() {
  const partnerTools = [
    {
      colorClass: "terraform",
      buttonClass:
        "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
      title: " Software Firewall deployment with Terraform",
      description:
        "Leverage validated Terraform Reference Architectures and Modules for VM-Series and CloudNGFW firewalls for rapid and reliable security in the cloud.",
      cta: {
        text: "Learn More",
        src: "/swfw",
      },
      logo: "/img/terraform-logo.png",
    },
    {
      colorClass: "terraform",
      buttonClass:
        "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
      title: "Palo Alto Networks as Code with Terraform",
      description:
        "Hashicorp's Terraform is widely used to build and deploy infrastructure, safely and efficiently, with high levels of automation and integration.",
      cta: {
        text: "Learn More",
        src: "/terraform",
      },
      logo: "/img/terraform-logo.png",
    },
    {
      colorClass: "ansible",
      buttonClass:
        "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EE0000_0%,#AA0000_50%,#EE0000_100%)]",
      title: "Ansible at Palo Alto Networks",
      description:
        "The collection of Ansible modules for PAN-OS has been officially certified by the Red Hat Ansible team (list of Ansible certified content) since version 2.12.2.",
      cta: {
        text: "Learn More",
        src: "/ansible",
      },
      logo: "/img/ansible-logo.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto justify-content-center">
      {partnerTools.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ buttonClass, title, description, logo, index, cta }) => {
  const { colorMode } = useColorMode();
  return (
    <div
      style={{ borderBottom: "none" }}
      className={cn(
        `flex flex-col lg:border-r  py-10 relative group/feature ${
          colorMode === "dark" && `dark:border-neutral-800`
        }`,
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div
          className={`opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 ${
            colorMode === "dark" && `dark:from-neutral-800`
          } to-transparent pointer-events-none`}
        />
      )}
      {index >= 4 && (
        <div
          className={`opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 ${
            colorMode === "dark" && `dark:from-neutral-800`
          } to-transparent pointer-events-none`}
        />
      )}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className={`absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 ${
            colorMode === "dark" && `dark:bg-neutral-700`
          } transition-all duration-200 origin-center`}
        />
        <span
          className={`group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 ${
            colorMode === "dark" && `dark:text-neutral-100`
          }`}
        >
          {title}
        </span>
      </div>
      <p
        className={`text-sm text-neutral-600 ${
          colorMode === "dark" && `dark:text-neutral-300`
        } max-w-xs relative z-10 px-10 pr-0`}
      >
        {description}
      </p>
      <div className="flex justify-between mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <img style={{ width: "50px" }} src={logo} />
        <Link to={cta.src}>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className={buttonClass} />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              {cta.text}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
