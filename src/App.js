import React from "react";
import ContactCard from "./Contactcard";

function App() {
  return (
    <div>
      {/* <ContactCard 
                headerName="Header1" 
                cardTitle="Primary card title" 
                cardText="Some quick example text to build on the card title and make up the bulk of the card's content1."
                cardClass="bg-primary"
              />
            <ContactCard 
                headerName="Header2" 
                cardTitle="Secondary card title" 
                cardText="Some quick example text to build on the card title and make up the bulk of the card's content2."
                cardClass="bg-secondary"
              />
              <ContactCard 
                headerName="Header3" 
                cardTitle="Success card title" 
                cardText="Some quick example text to build on the card title and make up the bulk of the card's content3."
                cardClass="bg-success"
              />
              <ContactCard 
                headerName="Header4" 
                cardTitle="Danger card title" 
                cardText="Some quick example text to build on the card title and make up the bulk of the card's content4."
                cardClass="bg-danger"
              />
              <ContactCard 
                headerName="Header5" 
                cardTitle="Warning card title" 
                cardText="Some quick example text to build on the card title and make up the bulk of the card's content5."
                cardClass="bg-warning"
              /> */}

      <ContactCard
        cardContent={{
          headerName: "Header1",
          cardTitle: "Primary card title",
          cardText:
            "Some quick example text to build on the card title and make up the bulk of the card's content1.",
          cardClass: "bg-primary"
        }}
      />
      <ContactCard
        cardContent={{
          headerName: "Header2",
          cardTitle: "Secondary card title",
          cardText:
            "Some quick example text to build on the card title and make up the bulk of the card's content2.",
          cardClass: "bg-secondary"
        }}
      />
      <ContactCard
        cardContent={{
          headerName: "Header3",
          cardTitle: "Success card title",
          cardText:
            "Some quick example text to build on the card title and make up the bulk of the card's content3.",
          cardClass: "bg-success"
        }}
      />
      <ContactCard
        cardContent={{
          headerName: "Header4",
          cardTitle: "Danger card title",
          cardText:
            "Some quick example text to build on the card title and make up the bulk of the card's content4.",
          cardClass: "bg-danger"
        }}
      />
      <ContactCard
        cardContent={{
          headerName: "Header5",
          cardTitle: "Warning card title",
          cardText:
            "Some quick example text to build on the card title and make up the bulk of the card's content5.",
          cardClass: "bg-warning"
        }}
      />
    </div>
  );
}
export default App;
