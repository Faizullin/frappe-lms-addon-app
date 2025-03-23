frappe.listview_settings["CArticle"] = {
	add_fields: ["title", "published", "blogger", "blog_category"],
	get_indicator: function (doc) {
		if (doc.published) {
			return [__("Published"), "green", "published,=,1"];
		} else {
			return [__("Not Published"), "gray", "published,=,0"];
		}
	},
};
