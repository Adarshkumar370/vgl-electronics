import Layout from "./Layout";

const About = () => {
  return (
    <Layout>
      <div className="m-3 p-3 min-h-screen">
        <span className="text-3xl font-semibold py-2 border-b-4 border-red-800">
          About Us{" "}
        </span>

        <div className="p-3 text-justify m-2 my-12 text-xl">
          <p className=" py-3 ">
            {" "}
            Vgl Electrical India Private Limited is a Private incorporated on 31
            October 2017. It is classified as Non-govt company and is registered
            at Registrar of Companies, Kanpur. It is inolved in Other wholesale
          </p>
          <br />
          <p className="py-3">
            {" "}
            Vgl Electrical India Private Limited's Annual General Meeting (AGM)
            was last held on 30 September 2019 and as per records from Ministry
            of Corporate Affairs (MCA), its balance sheet was last filed on 31
            March 2019. Directors of Vgl Electrical India Private Limited are
            Rimjhim and Ravi Kant.
          </p>
          <br />
          <p className="py-3">
            {" "}
            <b> Vgl Electrical India Private Limited's Corporate</b>{" "}
            Identification Number is <b>(CIN) U51909UP2017PTC098228</b> and its
            registration number is 98228.<br/><br/>Email address: {" "}
            <i className='text-blue-900 font-semibold'>shaiwal.sahil@vglelectricals.com</i><br/><br/>
            Registered Address: {" "}
            <b>
              H/O B-118 GALI NO-7 RAHUL VIHAR VIJAI NAGAR GHAZIABAD
              Ghaziabad UP 201009 INDIA{" "}
            </b>{" "}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
