/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  panos: [
    "docs/home",
    "docs/apis",
    "docs/apis/xmlapi_qs",
    "docs/apis/restapi_qs",
    "docs/apis/pandevice_qs",
    {
      type: "category",
      collapsed: false,
      label: "PAN Python SDK",
      items: [
        "docs/apis/panpython_qs",
        "docs/apis/panpython_apikey",
        "docs/apis/panpython_op",
      ],
    },
    "docs/apis/pango_qs",
    {
      type: "category",
      collapsed: false,
      label: "Tutorials",
      items: [
        "docs/apis/panos_dag_qs",
        "docs/apis/panos_tutorials_address_group",
        "docs/apis/panos_tutorials_rule_hit_count",
        "docs/apis/panos_tutorials_rulebase_to_csv",
        "docs/apis/panos_tutorials_uid_monitor",
      ],
    },
  ],
  automation: [
    "docs/automation",
    "docs/automation/terraform_ansible_container",
    "docs/automation/ansible_qs",
    "docs/automation/terraform_qs",
    "docs/automation/terraformer_qs",
    "docs/automation/automation_tutorials_ansible_srule",
    {
      type: "category",
      collapsed: false,
      link: { type: "doc", id: "docs/automation/cloud" },
      label: "Cloud Templates",
      items: [
        "docs/automation/cloud/azure_qs",
        "docs/automation/cloud/gcp_qs",
        {
          type: "category",
          collapsed: false,
          label: "AWS",
          link: { type: "doc", id: "docs/automation/cloud/aws_qs" },
          items: [
            "docs/automation/cloud/pan_guard_duty",
            "docs/automation/cloud/autoscaling_aws",
            "docs/automation/cloud/terraform_elb",
            "docs/automation/cloud/aws_alb_sandwich",
            "docs/automation/cloud/xff_demo",
          ],
        },
      ],
    },
  ],
};
