frappe.pages['landing'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Landing Page',
		single_column: true
	});
}