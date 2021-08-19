import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
const Root = styled.div`
  border: ${(props) => (props.selected ? "#22225f" : "1px solid white;")};
  width: 60%;
  height: 50px;
  border-radius: 100px;
  background-color: ${(props) => (props.selected ? "#21294c" : "#21294c")};
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${(props) => (props.selected ? "1px 1px 10px 1px white;" : null)};
`;
const Input = styled.input`
  max-width: 90%;
  border: none;
  resize: none;
  cursor: pointer;
  outline: none !important;
  @media (max-width: 1007px) {
    max-width: 70%;
  }
`;
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelect] = useState(false);

  const handleClick = () => {
    const searchparam = { title: search };
    axios
      .post(
        "https://whispering-sea-98580.herokuapp.com/books/search",
        searchparam
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSelect(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <Root selected={selected} ref={wrapperRef}>
      <Input
        placeholder="Search among thousand of books"
        onClick={(e) => {
          setSelect(true);
        }}
        style={{ color: "white", cursor: "pointer" }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></Input>
      <i
        onClick={handleClick}
        style={{ color: "white", cursor: "pointer" }}
        className="material-icons"
      >
        search
      </i>
    </Root>
  );
};

export default SearchBar;
