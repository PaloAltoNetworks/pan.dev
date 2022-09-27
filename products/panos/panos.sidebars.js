/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  panos: [
    "panos/docs/home",
    "panos/docs/apis",
    "panos/docs/apis/xmlapi_qs",
    "panos/docs/apis/restapi_qs",
    "panos/docs/apis/pandevice_qs",
    {
      type: "category",
      collapsed: false,
      label: "PAN Python SDK",
      items: [
        "panos/docs/apis/panpython_qs",
        "panos/docs/apis/panpython_apikey",
        "panos/docs/apis/panpython_op",
      ],
    },
    "panos/docs/apis/pango_qs",
    {
      type: "category",
      collapsed: false,
      label: "Tutorials",
      items: [
        "panos/docs/apis/panos_dag_qs",
        "panos/docs/apis/panos_tutorials_address_group",
        "panos/docs/apis/panos_tutorials_rule_hit_count",
        "panos/docs/apis/panos_tutorials_rulebase_to_csv",
        "panos/docs/apis/panos_tutorials_uid_monitor",
      ],
    },
  ],
  automation: [
    "panos/docs/automation",
    "panos/docs/automation/terraform_ansible_container",
    "panos/docs/automation/ansible_qs",
    "panos/docs/automation/terraform_qs",
    "panos/docs/automation/terraformer_qs",
    "panos/docs/automation/automation_tutorials_ansible_srule",
    {
      type: "category",
      collapsed: false,
      link: { type: "doc", id: "panos/docs/automation/cloud" },
      label: "Cloud Templates",
      items: [
        "panos/docs/automation/cloud/azure_qs",
        "panos/docs/automation/cloud/gcp_qs",
        {
          type: "category",
          collapsed: false,
          label: "AWS",
          link: { type: "doc", id: "panos/docs/automation/cloud/aws_qs" },
          items: [
            "panos/docs/automation/cloud/pan_guard_duty",
            "panos/docs/automation/cloud/autoscaling_aws",
            "panos/docs/automation/cloud/terraform_elb",
            "panos/docs/automation/cloud/aws_alb_sandwich",
            "panos/docs/automation/cloud/xff_demo",
          ],
        },
      ],
    },
  ],
};
