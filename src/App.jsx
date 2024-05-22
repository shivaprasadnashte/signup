
import { Checkbox, Form, Input } from "antd"
  ;
import FormItemInput from "antd/es/form/FormItemInput";
function App() {

  return (
    <>
      <div className="  w-full h-screen flex justify-center items-center ">
        <div className=" w-1/2 h-screen">
          <img src="../images/sideimage.jpeg" alt="side image" className=" w-full h-screen grayscale" />
        </div>
        <div className=" flex flex-col gap-2  p-10 justify-between border-2  w-1/2 h-screen items-center">
          <div className=" flex w-full justify-start">
            <img src="../images/Pasted image.png" alt="logo" className=" h-10 w-10" />

          </div>

          <div className=" w-full  h-full justify-center p-12 flex  flex-col gap-2">
            <div className=" flex justify-between w-full p-1 ">
              <div className=" text-3xl font-bold"> Sign Up</div>
              <div className=" font-bold">  Or <span className=" text-[#17B582]">Sign In</span></div>
            </div>
            <div className=" flex flex-col  ">
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}

              >
                <Input placeholder="Username" className=" w-full p-2 rounded-full border-2" />
              </Form.Item>
              <Form.Item
                name="password"

                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}

              >
                <Input.Password placeholder="Password" className=" w-full p-2 rounded-full border-2" />
              </Form.Item>
              <Form.Item

                name="re-password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}

              >
                <Input.Password placeholder="Re-Enter Password" className=" w-full  p-2 rounded-full border-2" />
              </Form.Item>
            </div>
            <div className=" flex w-full justify-between">
              <Form.Item
                name="remember"
                valuePropName="checked"

              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <div>
                Forgot Password?
              </div>
            </div>
            <button className=" bg-[#17B582] w-full p-2 rounded-full text-white font-bold">Log in</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
