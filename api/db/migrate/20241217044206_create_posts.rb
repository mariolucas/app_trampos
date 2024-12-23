class CreatePosts < ActiveRecord::Migration
  def self.up
    execute <<-SQL
      CREATE TABLE posts (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        content TEXT,
        published_at DATETIME,
        created_at DATETIME,
        updated_at DATETIME
      ) ENGINE=InnoDB
    SQL
  end

  def self.down
    drop_table :posts
  end
end
