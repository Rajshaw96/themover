import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PackersMovers.css";

const PackersMovers = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios
      .get("https://portal.themover.in/parc_api/getproduct.php")
      .then((response) => {
        if (response.data.CategoryData) {
          setCategories(response.data.CategoryData);
          const defaultCategory = response.data.CategoryData[0]; // Default to first category (HOUSE)
          setSelectedCategory(defaultCategory.main_cat_id);
          setProducts(defaultCategory.subcat_data?.[0]?.product_data || []);

          // Initialize quantities
          const initialQuantities = (defaultCategory.subcat_data?.[0]?.product_data || []).reduce((acc, item) => {
            acc[item.product_id] = 0;
            return acc;
          }, {});
          setQuantities(initialQuantities);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCategoryClick = (categoryId) => {
    const category = categories.find((cat) => cat.main_cat_id === categoryId);
    if (category) {
      setSelectedCategory(categoryId);
      setProducts(category.subcat_data?.[0]?.product_data || []);

      // Reset quantities
      const updatedQuantities = (category.subcat_data?.[0]?.product_data || []).reduce((acc, item) => {
        acc[item.product_id] = 0;
        return acc;
      }, {});
      setQuantities(updatedQuantities);
    }
  };

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + change),
    }));
  };

  return (
    <div className="container1">
      <h2>Packers & Movers</h2>
      <p>Select Items</p>

      {/* Category Tabs */}
      <div className="tabs">
        {categories.map((category) => (
          <span
            key={category.main_cat_id}
            className={selectedCategory === category.main_cat_id ? "active" : ""}
            onClick={() => handleCategoryClick(category.main_cat_id)}
          >
            {category.main_cat_title}
          </span>
        ))}
      </div>

      {/* Product List */}
      <div className="item-list">
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.product_id} className="item">
              <span>{item.product_title}</span>
              <div className="quantity-controls">
                <button
                  onClick={() => handleQuantityChange(item.product_id, -1)}
                  disabled={quantities[item.product_id] === 0}
                >
                  −
                </button>
                <span>{quantities[item.product_id]}</span>
                <button onClick={() => handleQuantityChange(item.product_id, 1)}>+</button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading items...</p>
        )}
      </div>

      <button className="continue-btn">Continue</button>
    </div>
  );
};

export default PackersMovers;
