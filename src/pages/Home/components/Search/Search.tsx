import { SearchFormContainer } from "./styles";

export function Search() {
  return (
    <SearchFormContainer>
      <div>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
}
