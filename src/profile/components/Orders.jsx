import React from 'react'

const Orders = () => {
    return (
        <div className="orders-section">
            <div className="orders-header">
                <span className="back-arrow">←</span>
                <span className="settings-title">Settings</span>
            </div>
            <div className="orders-content">
                <img
                    src="https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fcdn.zeptonow.com%2Fapp%2Fimages%2Fempty-bag.png&w=640&q=75"
                    alt="No orders"
                    className="no-orders-img"
                />
                <h3>No orders yet</h3>
                <button className="browse-btn">Browse products</button>
            </div>
        </div>
    )
}

export default Orders