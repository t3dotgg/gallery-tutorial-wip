import { useEffect, useState } from "react";

function Parent(props: { someProps: string }) {
  return (
    <Thing
      subThing={
        <OtherThing>
          <SmallThing>
            <EvenSmallerThing>
              <TinyThing>
                <ReallyTinyThing>
                  <ReallyReallyTinyThing>
                    <Something someProps={props.someProps} />
                  </ReallyReallyTinyThing>
                </ReallyTinyThing>
              </TinyThing>
            </EvenSmallerThing>
          </SmallThing>
        </OtherThing>
      }
    />
  );
}

function useName() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // Define full name
  const fullName = `${firstName} ${lastName}`;

  return { firstName, lastName, fullName, setFirstName, setLastName };
}

function Form() {
  const { firstName, lastName, fullName, setFirstName, setLastName } =
    useName();

  return (
    <div>
      <h1>Hello, {fullName}!</h1>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
