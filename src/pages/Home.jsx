import SectionTitle from "../components/SectionTitle";
import Table from "../components/Table";
import ButtonSecs from "../sections/ButtonSecs";

const Home = () => {
  const columnData = [
    { value: "name", label: "Name" },
    { value: "address", label: "Address" },
    { value: "salary", label: "Salary" },
    { value: "email", label: "Email" },
    {
      label: "Actions",
      content: (data) => {
        return (
          <div onClick={() => console.log(data)}>
            <a href={`mailto:${data.email}`}>Send email</a>
          </div>
        );
      },
    },
  ];
  const tableData = [
    {
      name: "John Doe",
      address: "123 Main Street",
      salary: "$50,000",
      email: "johndoe@example.com",
    },
    {
      name: "Jane Smith",
      address: "456 Elm Avenue",
      salary: "$60,000",
      email: "janesmith@example.com",
    },
    {
      name: "Mike Johnson",
      address: "789 Oak Road",
      salary: "$45,000",
      email: "mikejohnson@example.com",
    },
    {
      name: "Sarah Williams",
      address: "321 Pine Lane",
      salary: "$55,000",
      email: "sarahwilliams@example.com",
    },
    {
      name: "David Brown",
      address: "987 Cedar Court",
      salary: "$48,000",
      email: "davidbrown@example.com",
    },
  ];

  return (
    <section className="container mx-auto">
      <h1 className="text-center font-semibold text-4xl">Components to show</h1>
      <ButtonSecs />
      <SectionTitle>Table</SectionTitle>
      <Table columnData={columnData} tableData={tableData} />
    </section>
  );
};

export default Home;
