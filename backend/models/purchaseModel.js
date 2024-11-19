const db = require('../config/db'); // Asegúrate de que la ruta sea correcta

const purchaseModel = {
    create: async (purchaseData) => {
        const { user_id, product_name, product_price, selected_color, selected_size } = purchaseData;

        const query = `
            INSERT INTO purchases (user_id, product_name, product_price, selected_color, selected_size)
            VALUES (?, ?, ?, ?, ?)
        `;

        return new Promise((resolve, reject) => {
            db.query(query, [
                user_id || null,
                product_name || null,
                product_price || null,
                selected_color || null,
                selected_size || null,
            ], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
};

module.exports = purchaseModel;
