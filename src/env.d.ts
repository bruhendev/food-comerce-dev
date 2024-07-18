/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_API_BASE_URL: string;
  // Adicione mais variáveis conforme necessário
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
