// Sidebar Menu Data
const menuItems = [
    { name: "Dashboard", icon: "🏠" },
    { name: "UI Elements", icon: "🎨" },
    { name: "Comments", icon: "💬" },
    { name: "Forms Stuff", icon: "📝" },
    { name: "Data Table", icon: "📊" },
    { name: "Icons", icon: "🔣" },
    { name: "Sample Page", icon: "📄" },
    { name: "Extra", icon: "➕" }
];

// Generate Sidebar Menu
const sidebarMenu = document.getElementById("sidebar-menu");

menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("sidebar-item");
    
    menuItem.innerHTML = `
        <span>${item.name}</span>
        <span>${item.icon}</span>
    `;

    sidebarMenu.appendChild(menuItem);
});

// Sidebar Toggle Function
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
    const users = [
        { name: "John Doe", email: "john.doe@example.com", type: "Admin", joined: "2024-06-12", status: "Active" },
        { name: "Jane Smith", email: "jane.smith@example.com", type: "Editor", joined: "2024-07-08", status: "Inactive" },
        { name: "Alice Johnson", email: "alice.johnson@example.com", type: "Viewer", joined: "2024-05-15", status: "Pending" },
        { name: "Bob Williams", email: "bob.williams@example.com", type: "Admin", joined: "2024-04-20", status: "Active" },
        { name: "Emily Brown", email: "emily.brown@example.com", type: "Editor", joined: "2024-06-30", status: "Active" }
    ];

    const tableBody = document.querySelector("#userTable tbody");

    users.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.type}</td>
            <td>${user.joined}</td>
            <td class="${getStatusClass(user.status)}">${user.status}</td>
        `;

        tableBody.appendChild(row);
    });

    function getStatusClass(status) {
        if (status === "Active") return "status-active";
        if (status === "Inactive") return "status-inactive";
        if (status === "Pending") return "status-pending";
        return "";
    }
});
