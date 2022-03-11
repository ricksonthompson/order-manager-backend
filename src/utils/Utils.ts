// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
import { diskStorage } from 'multer';
import { Logger } from '@nestjs/common';
import { cwd } from 'process';

const uploadDirectory = cwd() + '/src/tmp/uploads';

export const locationToSaveFilesTemporarily = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      if (!fs.existsSync(uploadDirectory)) {
        fs.mkdirSync(uploadDirectory);
      }
      cb(null, uploadDirectory);
    },
  }),
};

export const verifyUploadDirectory = () => {
  if (!fs.existsSync(uploadDirectory)) {
    const _uploadDirectory = cwd() + '/src/tmp/uploads';

    fs.mkdir(_uploadDirectory, { recursive: true }, (err) => {
      new Logger('create storage path').error(err);
    });
  }
};
