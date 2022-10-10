module.exports = {
  logging_service_docs: [
    {
      type: "doc",
      id: "logforwarding/docs/home",
    },
	{
		type: "doc",
		id: "logforwarding/docs/getstarted_lf"
	},
	{
		type: "doc",
		id: "logforwarding/docs/specifylogs_lf"
	},	
	{
		type: "doc",
		id: "logforwarding/docs/syslog_lf"
	},
	{
		type: "doc",
		id: "logforwarding/docs/https_lf"
	}
  ],
  logging_service_api: require("../static/cdl/logforwarding/spec/sidebar_builder").sidebar,
};
