import React, { useState, useEffect } from "react";
import BookCard from "../../molecules/Card/Card";
import { Grid } from "@material-ui/core";

const BookItem = (props) => {
  const [books, setBooks] = useState([]);
  const [currBooks, setCurrBooks] = useState([]);
  const [finBooks, setFinBooks] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetchAllBooks();
    filterBooks();

    //console.log("rendering....")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchName, props.searchVal, props.category, props.view, books]);

  const fetchAllBooks = async () => {
    await fetch("http://localhost:8000/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      });
  };

  const filterBooks = () => {
    setCurrBooks(
      books.filter((book) => {
        return book.status === "current";
      })
    );

    setFinBooks(
      books.filter((book) => {
        return book.status === "finished";
      })
    );
  };

  // if(c)
  var bookslist = books;
  if (props.searchName !== undefined) {
    bookslist = bookslist.filter(function (book) {
      return (
        book.title.toLowerCase().indexOf(props.searchName.toLowerCase()) > -1 ||
        book.author.toLowerCase().indexOf(props.searchName.toLowerCase()) > -1
      );
    });
  }
  if (props.searchVal !== undefined) {
    console.log("In Search Value" + props.searchVal, props.view);
    bookslist = bookslist.filter(function (book) {
      console.log(book);
      if (props.view === "0" && props.authenticationStatus.isAuthenticated) {
        console.log("In View If");
        if (book.status === "current") {
          console.log("In If" + book.status);
          return (
            book.title.toLowerCase().indexOf(props.searchVal.toLowerCase()) >
              -1 ||
            book.author.toLowerCase().indexOf(props.searchVal.toLowerCase()) >
              -1
          );
        }
      } else if (
        props.view === "2" &&
        props.authenticationStatus.isAuthenticated
      ) {
        if (book.status === "finished")
          return (
            book.title.toLowerCase().indexOf(props.searchVal.toLowerCase()) >
              -1 ||
            book.author.toLowerCase().indexOf(props.searchVal.toLowerCase()) >
              -1
          );
      } else {
        return (
          book.title.toLowerCase().indexOf(props.searchVal.toLowerCase()) >
            -1 ||
          book.author.toLowerCase().indexOf(props.searchVal.toLowerCase()) > -1
        );
      }
      return null;
    });
    console.log(bookslist);
  }

  if (props.category !== undefined && props.category !== "") {
    bookslist = bookslist.filter(function (book) {
      return book.category.toLowerCase() === props.category.toLowerCase();
    });
    // console.log("Catogry BooksList:")
    // console.log(bookslist)
  }

  const handleLibrary = async (library, id) => {
    //console.log("Handling Library"+library,id);
    var tempBook;
    if (library) {
      await fetch("http://localhost:8000/books/" + id)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          tempBook = data;
        });
      const arr = ["explore", "current", "finished", "current"];
      let i = arr.indexOf(tempBook.status);
      tempBook.status = arr[i + 1];
      //console.log(tempBook);
      await fetch("http://localhost:8000/books/" + id, {
        method: "PUT",
        body: JSON.stringify(tempBook),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    }
    setToggle(!toggle);
  };

  const allbooks = bookslist.map((item) => {
    var set = true;
    if (item.status === "current" || item.status === "finished") {
      set = false;
    }
    //console.log("Each Item Status")
    //console.log(item.status)
    return (
      <Grid item xs={4}>
        <BookCard
          key={item.id}
          {...item}
          set={set}
          name="Add to Library"
          handleLibrary={handleLibrary}
        ></BookCard>
      </Grid>
    );
  });
  //console.log("Category All Books");
  //console.log(allbooks)
  //console.log(currBooks);
  var currBooksList = currBooks;
  var finBooksList = finBooks;
  if (
    props.view === "0" &&
    props.searchVal !== undefined &&
    props.searchVal !== ""
  ) {
    currBooksList = bookslist;
  }

  if (
    props.view === "2" &&
    props.searchVal !== undefined &&
    props.searchVal !== ""
  ) {
    finBooksList = bookslist;
  }
  const allbooksinhome = bookslist.map((item) => {
    return (
      <Grid item xs={4}>
        <BookCard
          key={item.id}
          {...item}
          name="Login to Read"
          set={false}
          handleLibrary={handleLibrary}
        ></BookCard>
      </Grid>
    );
  });
  const currbooks = currBooksList.map((item) => {
    return (
      <Grid item xs={4}>
        <BookCard
          key={item.id}
          {...item}
          name="Finish Reading"
          set={true}
          disabled={false}
          handleLibrary={handleLibrary}
        ></BookCard>
      </Grid>
    );
  });
  const finbooks = finBooksList.map((item) => {
    return (
      <Grid item xs={4}>
        <BookCard
          key={item.id}
          {...item}
          name="Read Again"
          set={true}
          disabled={false}
          handleLibrary={handleLibrary}
        ></BookCard>
      </Grid>
    );
  });
  return (
    <React.Fragment>
      {console.log(props.authenticationStatus)}
      {props.authenticationStatus.isAuthenticated && (
        <Grid container spacing={2}>
          {props.view === "1" && allbooks}
          {props.view === "0" && currbooks}
          {props.view === "2" && finbooks}
        </Grid>
      )}
      {!props.authenticationStatus.isAuthenticated && (
        <Grid container spacing={2}>
          {console.log("In Authencation state false")}
          {allbooksinhome}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default BookItem;
