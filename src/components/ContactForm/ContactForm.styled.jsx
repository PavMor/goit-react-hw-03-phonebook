.phonebook {
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid grey;
    border-radius: 5px;
    margin: 20px;
    max-width: 350px;
    padding: 10px;
    background-color: rgb(147, 231, 224);
  }
  
  .phonebook h2 {
    margin: 10px 0;
    text-align: center;
  }
  
  .phonebook form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  
  .phonebook form label {
    font-weight: 700;
  }
  
  .phonebook form input {
    margin: 5px 0;
    border: 1px solid grey;
    border-radius: 4px;
    height: 30px;
    padding-left: 10px;
  }
  
  .phonebook form input:hover {
    -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
  }
  
  import styled from '@emotion/styled';

export const Form = styled.form`
    margin-bottom: 50px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const Title = styled.span`
    font-weight: 600;
    color: var(--main-text-color);
    margin-bottom: 5px;
`;

export const Input = styled.input`
    height: 40px;
    padding: 0 10px 0 10px;
    border: 1px solid var(--second-bg-color);
    outline: none;
    color: var(--main-text-color);
    font-size: 14px;
    &:focus {
        border-color: var(--accent-bg-color);
    }
    &::placeholder {
        font-size: 12px;
        color: var(--main-text-color);
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 40px;
    background-color: var(--accent-bg-color);
    color: var(--second-text-color);
    font-family: inherit;
    border: none;
    cursor: pointer;
    transition: background-color var(--main-hover-animation);
    &:hover,
    &:focus {
        background-color: var(--second-bg-color);
    }
`;