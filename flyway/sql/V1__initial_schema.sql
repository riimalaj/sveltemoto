CREATE TABLE huoltorekisteri (
	id SERIAL PRIMARY KEY,
	moto VARCHAR(50),
	huolto TEXT,
	paikka VARCHAR(100),
    notet VARCHAR(200),
	tehty BOOLEAN DEFAULT false,	
    luotu TIMESTAMP DEFAULT NOW()
);

