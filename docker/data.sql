-- Drop tables if they exist (in dependency order)
DROP TABLE IF EXISTS OrderItem;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Type;
DROP TABLE IF EXISTS Brand;

-- Create Brand table
CREATE TABLE Brand (
  Id INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

-- Create Type table
CREATE TABLE Type (
  Id INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

-- Create Orders table
CREATE TABLE Orders (
  Id INT AUTO_INCREMENT PRIMARY KEY,
  Basket_Id VARCHAR(255),
  Delivery_Fee INT,
  Order_Date DATETIME DEFAULT NULL,
  Order_Status ENUM('PaymentFailed','PaymentReceived','Pending') DEFAULT 'Pending',
  address1 VARCHAR(255),
  address2 VARCHAR(255),
  city VARCHAR(255),
  country VARCHAR(255),
  name VARCHAR(255),
  state VARCHAR(255),
  zipcode VARCHAR(255) DEFAULT NULL,
  Sub_Total DECIMAL(10,2)
) ENGINE=InnoDB;

-- Create Product table
CREATE TABLE Product (
  Id INT AUTO_INCREMENT PRIMARY KEY,
  Description VARCHAR(255),
  Name VARCHAR(255),
  PictureUrl VARCHAR(255),
  Price INT,
  ProductBrandId INT,
  ProductTypeId INT,
  FOREIGN KEY (ProductBrandId) REFERENCES Brand(Id),
  FOREIGN KEY (ProductTypeId) REFERENCES Type(Id)
) ENGINE=InnoDB;

-- Create OrderItem table
CREATE TABLE OrderItem (
  Id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  pictureUrl VARCHAR(255),
  productId INT,
  Price INT DEFAULT NULL,
  Quantity INT,
  order_id INT,
  FOREIGN KEY (order_id) REFERENCES Orders(Id),
  FOREIGN KEY (productId) REFERENCES Product(Id)
) ENGINE=InnoDB;

-- Insert Brand data
INSERT INTO Brand (Name) VALUES
('Energy Boosters'),
('Workout Gear'),
('Relaxation Gear');

-- Insert Type data
INSERT INTO Type (Name) VALUES
('Protein Powders'),
('Pre-Workout'),
('Energy Bars'),
('Yoga Mats'),
('Resistance Bands'),
('Dumbbells & Kettlebells'),
('Massage Guns'),
('Ice Packs'),
('Heating Pads');

-- Insert Orders data
INSERT INTO Orders (Basket_Id, Delivery_Fee, Order_Date, Order_Status, address1, address2, city, country, name, state, zipcode, Sub_Total) VALUES
('undiruwkxb4ydfyk8f6t5zw7', 200, NULL, 'Pending', 'bezonbagh', 'block', 'Nagpur', 'IN', 'Rani Rangari', 'Maharashtra', NULL, 650),
('rmx83xxr8q2cr66rrq9366fk', 200, NULL, 'Pending', 'bezonbagh', 'block', 'Nagpur', 'IN', 'Rani Rangari', 'Maharashtra', NULL, 1600),
('oo6ukpjeeeqz1kizmoxnodri', 200, NULL, 'Pending', 'bezonbagh', '', 'Nagpur', 'IN', 'Rani Rangari', 'Maharashtra', NULL, 9897);

-- Insert Product data
INSERT INTO Product (Description, Name, PictureUrl, Price, ProductBrandId, ProductTypeId) VALUES
('Premium whey protein blend with 24g protein per serving. Supports muscle recovery and growth.', 'Whey Protein', '/images/products/protein_powder.png', 2499, 1, 1),
('Optimum Nutrition pre-workout with 175mg caffeine and beta-alanine. Enhances focus and workout intensity.', 'ON Pre-Workout', '/images/products/pre_workout1.jpeg', 1299, 1, 2),
('A delicious and nutritious chocolate peanut butter energy bar made with whole grains and nuts. Perfect for a quick energy boost before or after workouts.', 'Yoga Bar - Chocolate Peanut Butter', '/images/products/energy_bar1.jpeg', 150, 1, 3),
('A lightweight and durable blue yoga mat with non-slip texture for better grip. Ideal for home and studio workouts.', 'Simple Blue Yoga Mat', '/images/products/yoga_mats1.jpeg', 800, 2, 4),
('Set of high-quality resistance bands in red, yellow, blue, green, and violet. Ideal for strength training and rehabilitation exercises.', 'Simple Resistance Bands - Various Colors', '/images/products/resistant_band1.webp', 600, 2, 5),
('High-quality steel dumbbells with a white chrome handle and black-coated ends for a comfortable and secure grip.', 'Black Dumbbells - Steel with Black Coating', '/images/products/dumbells1.png', 1500, 2, 6),
('Najpo deep tissue massage gun with white and black design, multiple speed settings, and interchangeable heads for muscle recovery.', 'Najpo Massage Gun - White & Black', '/images/products/massage_guns1.avif', 3200, 3, 7),
('A reusable ice pack providing quick relief from muscle pain and swelling. Designed for easy application and long-lasting cold therapy.', 'Rapid Relief Reusable Ice Pack', '/images/products/ice_packs1.png', 250, 3, 8),
('A simple water-based heating pad designed for quick and even heat distribution. Ideal for muscle relaxation and pain relief.', 'Water-Based Heating Pad', '/images/products/heating_pad1.jpg', 300, 3, 9),
('Smooth vanilla flavor with 20g protein and low carbs. Ideal for post-workout recovery.', 'Vanilla Flavor Protein', '/images/products/protein_powder2.webp', 2399, 1, 1),
('C4’s explosive formula with 150mg caffeine and creatine nitrate. Boosts energy and performance.', 'C4 Pre-Workout', '/images/products/pre_workout2.jpeg', 1499, 1, 2),
('Rich chocolate-flavored PVM energy bar packed with protein and essential nutrients. Ideal for fueling your workout sessions.', 'PVM Energy Bar - Chocolate Flavored', '/images/products/energy_bar2.jpeg', 180, 1, 3),
('Premium quality yoga mat featuring a diamond pattern for enhanced stability and support during workouts.', 'Yellow Diamond Shape Yoga Mat', '/images/products/yoga_mats2.jpeg', 900, 2, 4),
('Durable resistance bands with comfortable black handle grips for better control during workouts.', 'Resistance Bands with Black Handle Grip', '/images/products/resistant_band2.webp', 700, 2, 5),
('Set of kettlebells in different sizes and vibrant colors. Ideal for strength training and improving grip strength.', 'Colored Kettlebells - Various Sizes', '/images/products/kettlebell.png', 1800, 2, 6),
('Croma professional-grade massage gun in sleek black finish with 6 intensity levels for effective muscle relaxation.', 'Croma Massage Gun - Black', '/images/products/massage_guns2.webp', 2800, 3, 7),
('Soft cloth-covered ice pack with a secure white cap for easy filling. Ideal for treating headaches, bruises, and muscle soreness.', 'Cloth-Covered Ice Pack with White Cap', '/images/products/ice_packs2.png', 200, 3, 8),
('A premium leather-style heating pad designed to provide targeted relief for back pain. Adjustable heat settings for comfort.', 'Leather-Style Heating Pad for Back Pain', '/images/products/heating_pad2.jpg', 500, 3, 9),
('Plant-based organic protein with 21g protein and natural ingredients. Great for clean eating and muscle repair.', 'Organic Protein', '/images/products/protein_powder3.jpeg', 2599, 1, 1),
('Tasty blue raspberry flavor with 200mg caffeine. Improves stamina and mental focus.', 'Blue Raspberry Pre-Workout', '/images/products/pre_workout3.jpeg', 1399, 1, 2),
('A multi-vitamin enriched energy bar designed to provide balanced nutrition and sustained energy throughout the day.', 'Go On! 7 Vitamins Bar', '/images/products/energy_bar3.jpeg', 120, 1, 3),
('Beautifully designed yoga mat with a mandala pattern. Provides cushioning and stability for all yoga poses.', 'Mandala Art Yoga Mat', '/images/products/yoga_mats3.jpeg', 950, 2, 4),
('Set of resistance bands with adjustable ankle straps for lower body strengthening and flexibility training.', 'Resistance Bands with Ankle Strap', '/images/products/resistant_band3.jpg', 750, 2, 5),
('Complete strength training set with both dumbbells and kettlebells for versatile workout routines.', 'Dumbbell and Kettlebell Set', '/images/products/dumbells2.png', 3500, 2, 6),
('Herzog lightweight and portable massage gun with high torque motor for quick muscle relief and recovery.', 'Herzog Massage Gun - Compact and Powerful', '/images/products/massage_guns3.webp', 3500, 3, 7),
('A basic gel-based ice pack designed to provide soothing relief from injuries and muscle strains. Lightweight and easy to store.', 'Simple Gel-Based Ice Pack', '/images/products/ice_packs3.webp', 180, 3, 8),
('A soft, lightweight heating pad specifically designed to relieve menstrual cramps. Provides gentle and consistent warmth.', 'Period Cramp Relief Heating Pad', '/images/products/heating_pad3.jpg', 350, 3, 9);

-- Insert OrderItem data
INSERT INTO OrderItem (name, pictureUrl, productId, Price, Quantity, order_id) VALUES
('Rapid Relief Reusable Ice Pack', '/images/products/ice_packs1.png', 8, 250, 1, 1),
('Cloth-Covered Ice Pack with White Cap', '/images/products/ice_packs2.png', 17, 200, 2, 2),
('Simple Blue Yoga Mat', '/images/products/yoga_mats1.jpeg', 4, 800, 2, 2),
('C4 Pre-Workout', '/images/products/pre_workout2.jpeg', 11, 1499, 1, 1),
('Croma Massage Gun - Black', '/images/products/massage_guns2.webp', 16, 2800, 2, 2),
('Blue Raspberry Pre-Workout', '/images/products/pre_workout3.jpeg', 20, 1399, 2, 2);
