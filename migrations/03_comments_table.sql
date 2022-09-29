CREATE TABLE comments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    body VARCHAR(255),
    author INT,
    CONSTRAINT FK_user_id_comm FOREIGN KEY (author) REFERENCES users(id)
)