CREATE TABLE orcamento (
    id BIGSERIAL PRIMARY KEY,
    clientenome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    valor BIGINT NOT NULL
);
