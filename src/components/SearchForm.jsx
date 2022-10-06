import { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  font: inherit;
  font-size: 20px;
  border: solid 2px #b5bdf0;
  outline: none;
  border-radius: 3px;
  background-color: #eaecfb;
`;

const StyledButton = styled.button`
  width: 70px;
  height: 43px;
  padding: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #b5bdf0;
  border: solid 2px #eaecfb;
  cursor: pointer;
  color: #ffffff;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputHandler = e => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Fill in search line');
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={onSubmitHandler}>
        <label>
          <StyledInput
            type="text"
            name="name"
            autoFocus
            autoComplete="off"
            placeholder="Type in movie name..."
            value={inputValue}
            onChange={onInputHandler}
          />
        </label>

        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

SearchForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchForm;
