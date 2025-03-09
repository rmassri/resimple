import { Injectable } from '@nestjs/common';
import * as companies from '../helper/company.json';

@Injectable()
export class CompanyService {
  findAll() {
    return companies;
  }
}
