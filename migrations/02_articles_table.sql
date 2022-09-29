CREATE TABLE articles(
    id    INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    body VARCHAR(255),
    createdAt VARCHAR(255),
    author INT,
    CONSTRAINT FK_user_id FOREIGN KEY (author) REFERENCES users(id)
);