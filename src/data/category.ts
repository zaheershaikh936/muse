export type categoryT = {
    _id: number;
    name: string;
    subcategory: {
        _id: number;
        name: string;
    }[];
    total: number;
}
export const categories: categoryT[] = [
    {
        _id: 1,
        name: "Software Engineer",
        subcategory: [
            { _id: 1, name: "Data Engineer" },
            { _id: 2, name: "Data Engineer" },
        ],
        total: 4
    },
    {
        _id: 2,
        name: "Data Scientist",
        subcategory: [
            { _id: 1, name: "Data Engineer" },
            { _id: 2, name: "Data Scientist" }
        ],
        total: 2
    },
    {
        _id: 3,
        name: "Machine Learning Engineer",
        subcategory: [
            { _id: 1, name: "Security Specialist" },
            { _id: 2, name: "DevOps Engineer" }
        ],
        total: 2
    },
    {
        _id: 4,
        name: "Security Engineer",
        subcategory: [
            { _id: 1, name: "Full stack developer" },
            { _id: 2, name: "DevOps Engineer" },
        ],
        total: 5
    },
    {
        _id: 5,
        name: "DevOps Engineer",
        subcategory: [
            { _id: 1, name: "Security Specialist" },
            { _id: 2, name: "Backend developer" },
        ],
        total: 3
    },
    {
        _id: 6,
        name: "Cloud Architect",
        subcategory: [
            { _id: 1, name: "Frontend developer" },
            { _id: 2, name: "DevOps Engineer" }
        ],
        total: 2
    },
    {
        _id: 7,
        name: "Product Manager",
        subcategory: [
            { _id: 1, name: "Machine Learning Engineer" },
            { _id: 2, name: "Backend developer" },
        ],
        total: 4
    },
    {
        _id: 8,
        name: "UX/UI Designer",
        subcategory: [
            { _id: 1, name: "Data Analyst" },
            { _id: 2, name: "Frontend developer" }
        ],
        total: 2
    },
    {
        _id: 9,
        name: "HR Specialist",
        subcategory: [
            { _id: 1, name: "Data Engineer" },
            { _id: 2, name: "Full stack developer" },
            { _id: 3, name: "Security Specialist" },
            { _id: 4, name: "DevOps Engineer" }
        ],
        total: 4
    },
    {
        _id: 10,
        name: "Business Analyst",
        subcategory: [
            { _id: 1, name: "DevOps Engineer" },
            { _id: 2, name: "Frontend developer" }
        ],
        total: 2
    }
];
