<div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form method = "POST">
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          {/* <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
        </div>
          <p>{formErrors.username}</p> */}
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name=""
              placeholder="Email"
            //   value={formValues.email}
            //   onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name=""
              placeholder="Password"
            //   value={formValues.password}
            //   onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          {/* <button className="fluid ui button blue">Submit</button> */}
          <input type="submit" className="fluid ui button blue" onClick={submit}/>
        </div>
      </form>
    </div>