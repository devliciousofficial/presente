SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;
SET default_tablespace = '';
SET default_table_access_method = heap;
CREATE TABLE public.demo (
    id integer NOT NULL,
    name character varying(200) DEFAULT ''::character varying NOT NULL,
    hint text DEFAULT ''::text NOT NULL
);
CREATE SEQUENCE public.demo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.demo_id_seq OWNED BY public.demo.id;
CREATE TABLE public.loja (
    id_loja integer NOT NULL,
    cnpj_loja integer NOT NULL,
    nome_loja text NOT NULL,
    cep_loja integer NOT NULL,
    endereco_loja text NOT NULL,
    status_loja integer NOT NULL
);
CREATE TABLE public.pagamento (
    id_pagamento integer NOT NULL,
    forma_pagamento integer NOT NULL,
    valor_pagamento integer NOT NULL,
    taxa_manutencao integer NOT NULL,
    taxa_cancelamento integer NOT NULL
);
CREATE TABLE public.pedido (
    id_pedido integer NOT NULL,
    qtd_produto integer NOT NULL,
    pagamento_id_pagamento_key integer
);
CREATE TABLE public.produto (
    id_produto integer NOT NULL,
    categoria_produto integer NOT NULL,
    peso_produto integer NOT NULL,
    tamanho_produto integer NOT NULL,
    qtd_disponivel integer NOT NULL,
    loja_id_loja integer NOT NULL,
    loja_cnpj_loja_key integer NOT NULL,
    usuario_nome_usuario_key text NOT NULL
);
CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    senha_usuario text NOT NULL,
    nome_usuario text NOT NULL,
    cpfusuario integer NOT NULL,
    cepusuario integer NOT NULL,
    enderecousuario text
);
ALTER TABLE ONLY public.demo ALTER COLUMN id SET DEFAULT nextval('public.demo_id_seq'::regclass);
ALTER TABLE ONLY public.demo
    ADD CONSTRAINT demo_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.loja
    ADD CONSTRAINT loja_cnpj_loja_key UNIQUE (cnpj_loja);
ALTER TABLE ONLY public.loja
    ADD CONSTRAINT loja_pkey PRIMARY KEY (id_loja);
ALTER TABLE ONLY public.pagamento
    ADD CONSTRAINT pagamento_pkey PRIMARY KEY (id_pagamento);
ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_pkey PRIMARY KEY (id_produto);
ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_cpfusuario_key UNIQUE (cpfusuario);
ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_nome_usuario_key UNIQUE (nome_usuario);
ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);