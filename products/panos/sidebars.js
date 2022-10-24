module.exports = {
    panos: [
        "panos/docs/intro",
        {
            type: "category",
            collapsed: true,
            label: "APIs",
            items: [
                "panos/docs/xmlapi",
                "panos/docs/restapi"
            ],
        },
        {
            type: "category",
            collapsed: true,
            label: "SDKs",
            items: [
                "panos/docs/panospython",
                "panos/docs/panpython",
                "panos/docs/pango",
                "panos/docs/panosphp"
            ],
        },
    ],
  };