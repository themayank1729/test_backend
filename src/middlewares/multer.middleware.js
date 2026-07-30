import multer from "multer";

const storage = multer.diskStorage({
  //file was given by multer
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
//in es6 we can simply write storage one time {storage}
