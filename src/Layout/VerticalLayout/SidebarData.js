const SidebarData = [
    {
        label: "Menu",
        isMainMenu: true,

    },
    {
        label: "Overview",
        icon: "mdi mdi-view-dashboard-outline",
        url: "/overview",
        isHasArrow: true,
        roles: ["propertyOwner", "serviceProvider"],
    },
    {
        label: "Properties",
        icon: "ri-map-pin-line",
        url: "/properties",
        isHasArrow: true,
        roles: ["serviceProvider"],
    },
    {
        label: "Tenants",
        icon: "mdi mdi-account-group-outline",
        url: "/tenants",
        isHasArrow: true,
        roles: ["serviceProvider"],
    },
    {
        label: "Leases",
        icon: "mdi mdi-file-document-outline",
        url: "/leases",
        isHasArrow: true,
        roles: ["serviceProvider"],
    },
    {
        label: "Maintenance",
        icon: "mdi mdi-tools",
        url: "/maintenance",
        isHasArrow: true,
        roles: ["propertyOwner"],
    },
    {
        label: "Billing",
        icon: "mdi mdi-cash-multiple",
        url: "/billing",
        isHasArrow: true,
        roles: ["propertyOwner"],
    },
    {
        label: "Services",
        icon: "mdi mdi-cog-outline",
        url: "/services",
        isHasArrow: true,
        roles: ["propertyOwner"],
    },
    {
        label: "Schedule",
        icon: "mdi mdi-calendar-blank-outline",
        url: "/schedule",
        isHasArrow: true,
        roles: ["propertyOwner"],
    },
];

export default SidebarData;

