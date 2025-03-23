// Copyright (c) 2025, aman and contributors
// For license information, please see license.txt

frappe.ui.form.on("CArticle", {
	refresh(frm) {
        // frappe.db.get_single_value("Blog Settings", "show_cta_in_blog").then((value) => {
		// 	frm.set_df_property("hide_cta", "hidden", !value);
		// });

		frm.trigger("add_publish_button");

		// generate_google_search_preview(frm);
	},
    add_publish_button(frm) {
		frm.add_custom_button(frm.doc.published ? __("Unpublish") : __("Publish"), () => {
			frm.set_value("published", !frm.doc.published);
			frm.save();
		});
	},
});
