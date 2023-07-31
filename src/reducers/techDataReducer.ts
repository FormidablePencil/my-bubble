import { FETCHED_ALL_TECH_DATA } from "../actions/types"

export interface techDataT {
  technology: string
  description?: string
  _id: string
  image: string
}

const initialState: techDataT[] = [
  {
    _id: "0",
    technology: "vue",
    image: "https://i.ibb.co/5Kn9mXG/vue.png"
  },
  {
    _id: "1",
    technology: "netlify",
    image: "https://i.ibb.co/HVRK4Lk/netlify.png"
  },
  {
    _id: "2",
    technology: "bootstrap",
    image: "https://i.ibb.co/7bqQK1p/boostrap.png"
  },
  {
    _id: "3",
    technology: "expo",
    image: "https://i.ibb.co/M73yQZt/expoLogo.png"
  },
  {
    _id: "4",
    technology: "aws s3",
    image: "https://i.ibb.co/VtRLrV7/aws-s3-icon.png"
  },
  {
    _id: "5",
    technology: "electron",
    image: "https://i.ibb.co/n84xNGD/electron.png"
  },
  {
    _id: "6",
    technology: "vim",
    image: "https://i.ibb.co/gwXwmjY/vim.png"
  },
  {
    _id: "7",
    technology: "mongoose",
    image: "https://i.ibb.co/xHrVHn2/mongoose.png"
  },
  {
    _id: "8",
    technology: "tailwind",
    image: "https://i.ibb.co/mhCwGWx/tailwind.png"
  },
  {
    _id: "9",
    technology: "react spring",
    image: "https://i.ibb.co/DM6b0gQ/react-spring.png"
  },
  {
    _id: "10",
    technology: "material ui",
    image: "https://i.ibb.co/VQD5cY6/material-ui.png"
  },
  {
    _id: "11",
    technology: "vuex",
    image: "https://i.ibb.co/D52WDVd/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png"
  },
  {
    _id: "12",
    technology: "github",
    image: "https://i.ibb.co/YLrxRZF/github.png"
  },
  {
    _id: "13",
    technology: "react",
    image: "https://i.ibb.co/nb965ST/react-Logo.png"
  },
  {
    _id: "14",
    technology: "css",
    image: "https://i.ibb.co/NN1wYdf/css.png"
  },
  {
    _id: "15",
    technology: "wordpress",
    image: "https://i.ibb.co/Xtp82zv/wordpress-Logo.png"
  },
  {
    _id: "16",
    technology: "passport",
    image: "https://i.ibb.co/thbzvny/passport-Js.png"
  },
  {
    _id: "17",
    technology: "express",
    image: "https://i.ibb.co/CJfJN1D/express-Logo.png"
  },
  {
    _id: "18",
    technology: "node",
    image: "https://i.ibb.co/Pm9X8Jq/Node.png"
  },
  {
    _id: "17",
    technology: "javascript",
    image: "https://i.ibb.co/9GmNNFK/javascript.png"
  },
]

export default (state: techDataT[] = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_ALL_TECH_DATA:
      return payload

    default:
      return state
  }
}
