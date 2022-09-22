module.exports = {
  logging_service_docs: [
    {
      type: "doc",
      id: "logforwarding/docs/home",
    },
  ],
  logging_service_api: require("../static/cdl/logforwarding/spec/sidebar_builder").sidebar,
};
