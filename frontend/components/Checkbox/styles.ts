import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  label {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--text-light);
    margin-left: 0.8rem;
  }

  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: var(--background-2);
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: var(--background-2);
    width: 1.6rem;
    height: 1.6rem;
    border: 0.15em solid var(--background-2);
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
    cursor: pointer;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 1rem;
    height: 1rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem var(--secondary);
    background-color: CanvasText;

    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
`;
