---
id: crumbs
title: Using Crumbs to Tag
hide_title: false
description: How to use crumbs.json to tag docs
---

This doc is intended for Palo Alto Networks TechDocs Authors. The doc will walk through how to properly tag pan.dev docs so TechDocs search filters will work on them. 

## Setup

The tagging system is run through `crumbs.json` file in the root of the pan.dev repo. In that file you will find a list of parent and children objects. The format of these objects looking something like: 

```json 
"product_a": {
    "href": "/product_a", // This needs to match the URL that all of the docs for this product belong to. If there are multiple URLs, you need multiple entries here. 
    "label": "Product A",
    "sitemap_productcategory": ["Product A Category"], // Follows TechDocs Tagging System
    "children": [
      {
        "href": "/product_a/docs", // Children's href must include the parents href, if the beginning of the href is different, need to make a separate entry for it
        "label": "Product A Docs",
        "description": "Product A Developer Documentation",
        "sitemap_feature-category": ["Feature1", "Feature2"], // Follows TechDocs Tagging System
      },
      {
        "href": "/product_a/api",
        "label": "Product A API",
        "description": "Product A API Reference",
        "sitemap_feature-category": ["Feature4"], // Follows TechDocs Tagging System
        "sitemap_feature": ["API"] // Follows TechDocs Tagging System
      }
    ]
  },
"product_b": {
    "href": "/product_b", 
    "label": "Product B",
    "sitemap_productcategory": ["Product B Category"], // Follows TechDocs Tagging System
    "children": [
      {
        "href": "/product_b/API",
        "label": "Product B API Docs",
        "description": "Product B API Reference",
        "sitemap_feature-category": ["Feature1", "Feature2", "Feature3"], // Follows TechDocs Tagging System
        "sitemap_feature": ["API"] // Follows TechDocs Tagging System
      }
    ]
  },
```

pan.dev applies tags in a hierarchical structure, any tags added at a parent level are given to all children of that. They are applied based on the href (aka URL path after pan.dev). 

For example, any page under `pan.dev/product_a` will have the `Product A Category` tag applied to it. 

If we have a page at `/product_a/docs/intro` it would first match with the `"href": "/product_a"` and get the `Product A Category` tag applied. 

After that match, it would go to children of `/product_a` and find a match with `"href": "/product_a/docs"` and apply the `Feature 1` and `Feature 2` tags. 

It would not match with `/product_a/api` therefore `Feature4` tag would not be applied. 

:::caution

It is important that the `href` is correct as that is the matching mechanism used to apply tags to pages. You need to ensure that all children's `href`'s include the parents `href` at the base. If the parent's `href` is `/parent` but you put the childrens docs at `/children` it won't work. You need to make a separate top level entry for `/children` or ensure the `href` for children is `/parent/children`. 

:::


All of the supported tag types are: 

- `sitemap_feature` 
- `sitemap_feature-category`
- `sitemap_productcategory`
- `sitemap_osversion`
- `sitemap_informationtype`

If you have any questions, reach out to #pan-dev on Slack. 