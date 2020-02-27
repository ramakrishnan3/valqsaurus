/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const baseUrl = require("./urlConfig.json").baseUrl;
const useBaseUrl = (url) => baseUrl+url;

module.exports = {
    sideBar: {
        Quickstart: [
            "general/getting-started",
            "general/understanding-variances",
            "general/understanding-node-widget",
            "general/conducting-what-if",
            "general/more-info-value-driver",
            "general/saving-opening-scenarios",
            "general/workspace-in-valq",
            "general/valq-in-powerbi"
        ],
        "Model Tab": [
            "model/new",
            "model/node",
            "model/data-series",
            "model/settings",
            "model/general"
        ],
        "Plan Tab": [
            "planning/overview",
            "planning/budget-allocation",
            {
                type: "category",
                label: "Other features",
                items: ["planning/others/adding-note", "planning/others/view-history"]
            }
        ],
        Simulate: ["simulation/simulation"],
        "Analyze Tab": ["analysis/variance-analysis"],
        "Storage and Collaboration": ["storage/storage-collaboration"],
        Resources: [
            "faq/formula-list",
            "faq/definitions",
            "faq/known-issues",
            {
                type: "link",
                label: "Writeback",
                href: useBaseUrl('docs/faq/write-back')
            },
            {
                type: "category",
                label: "Videos",
                items: [
                    "faq/videos-overview",
                    "faq/videos-how-to",
                    "faq/videos-demo",
                    "faq/videos-income-statement",
                    "faq/videos-demand-planning",
                    "faq/videos-others"
                ]
            }
        ]
    },
    writebackSideBar: {
        "Writeback": [
            "faq/write-back",
            "faq/write-back-schema"
        ]
    },
    functionSideBar: {
        "Logical Functions": [
            "references/formulas/if",
            "references/formulas/and",
            "references/formulas/switch",
            "references/formulas/or",
            "references/formulas/not",
            "references/formulas/xor"
        ],
        "Math Functions": [
            "references/formulas/sum",
            "references/formulas/average",
            "references/formulas/averageexzero",
            "references/formulas/averageexneg",
            "references/formulas/averageexzeroneg",
            "references/formulas/count",
            "references/formulas/abs",
            "references/formulas/min",
            "references/formulas/max",
            "references/formulas/power",
            "references/formulas/sqrt",
            "references/formulas/exp",
            "references/formulas/log"
        ],
        "Finance Functions": [
            "references/formulas/irr",
            "references/formulas/npv",
            "references/formulas/pmt",
            "references/formulas/ipmt",
            "references/formulas/fv",
            "references/formulas/pv",
            "references/formulas/cumipmt",
            "references/formulas/cumprinc",
            "references/formulas/rate"
        ],
        "Range Functions": [
            "references/formulas/range",
            "references/formulas/lastnperiods",
            "references/formulas/get",
            "references/formulas/foreach"
        ],
        "Static Identifiers": [
            "references/formulas/this",
            "references/formulas/me",
            "references/formulas/current_series",
            "references/formulas/current_series_id",
            "references/formulas/node-properties"
        ]
    }
};
