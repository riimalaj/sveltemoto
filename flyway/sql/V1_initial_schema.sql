CREATE TABLE collections (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) UNIQUE
);

CREATE TABLE todos (
	id SERIAL PRIMARY KEY,
	task VARCHAR(50) UNIQUE,
	collection_id INTEGER REFERENCES collections(id)
);