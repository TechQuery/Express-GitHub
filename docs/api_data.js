define({ "api": [
  {
    "type": "get",
    "url": "/OAuth/callback",
    "title": "OAuth Callback for GitHub",
    "name": "OAuth_callback",
    "version": "0.4.0",
    "group": "OAuth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Disposable checksum</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Last Page Referer of this site in Base64</p>"
          }
        ]
      }
    },
    "filename": "core/OAuth.js",
    "groupTitle": "OAuth"
  },
  {
    "type": "get",
    "url": "/OAuth",
    "title": "Redirect to OAuth Page of GitHub",
    "name": "OAuth_entry",
    "version": "0.4.0",
    "group": "OAuth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Referer",
            "description": "<p>URL of Source Page</p>"
          }
        ]
      }
    },
    "filename": "core/OAuth.js",
    "groupTitle": "OAuth"
  },
  {
    "type": "get",
    "url": "/orgs/:name/languages",
    "title": "Get Technique(Language)s of an Organization",
    "name": "getOrganizationLanguage",
    "version": "0.4.1",
    "group": "Organization",
    "filename": "core/Language.js",
    "groupTitle": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a User or Organization</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Technique(Language) array",
          "content": "[\n    {\"name\": \"JavaScript\",  \"count\": 123456},\n    {\"name\": \"HTML\",  \"count\": 12345},\n    {\"name\": \"CSS\",  \"count\": 1234}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/repos/:owner/:repo/pull/:id.diff",
    "title": "Get Diff File",
    "name": "getDiffFile",
    "version": "0.4.0",
    "group": "Repository",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>ID of a User or Organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of a Repository</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of a Pull Request</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTML converted from Diff by Diff2HTML",
          "content": "<div class=\"d2h-wrapper\"></div>",
          "type": "html"
        }
      ]
    },
    "filename": "core/Proxy.js",
    "groupTitle": "Repository"
  },
  {
    "type": "get",
    "url": "/user/languages",
    "title": "Get Technique(Language)s of an OAuth User",
    "name": "getOAuthUserLanguage",
    "version": "0.4.1",
    "group": "User",
    "filename": "core/Language.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:name/languages",
    "title": "Get Technique(Language)s of a User",
    "name": "getUserLanguage",
    "version": "0.4.1",
    "group": "User",
    "filename": "core/Language.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a User or Organization</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Technique(Language) array",
          "content": "[\n    {\"name\": \"JavaScript\",  \"count\": 123456},\n    {\"name\": \"HTML\",  \"count\": 12345},\n    {\"name\": \"CSS\",  \"count\": 1234}\n]",
          "type": "json"
        }
      ]
    }
  }
] });
