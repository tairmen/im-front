export const state = () => ({
    menu_items: [
        {
            text: "main_page",
            to: "#",
        },
        {
            text: "about_us",
            to: "#",
        },
        {
            text: "services",
            to: "#",
        },
        {
            text: "contact_us",
            to: "#",
        },
    ]
});

export const getters = {
    getAllMenu(state) {
        return state.menu_items;
    },
};

export const actions = {};

export const mutations = {};
