module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }
            
            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A Vue.js project"
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "serverRootUrl": {
            "type": "string",
            "message": "Ajax request server root url",
            "default": "http://localhost:8080/"
        }
    },
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/reamd/vue-template\n\nIf you need request data,please use proxyTable,documentation can be found at https://vuejs-templates.github.io/webpack/proxy.html"
}
