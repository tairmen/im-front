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
    ],
    mobileMenu: false
});

export const getters = {
    getAllMenu(state) {
        return state.menu_items;
    },
    mobileMenu: (state) => {
        return state.mobileMenu;
    },
};

export const actions = {};

export const mutations = {
    setMobileMenu(state) {
        state.mobileMenu = true;
    },
    unsetMobileMenu(state) {
        state.mobileMenu = false;
      },
};
