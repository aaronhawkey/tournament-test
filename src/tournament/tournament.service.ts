import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';

@Injectable()
export class TournamentService extends TypeOrmCrudService<Tournament> {
    constructor(
        @InjectRepository(Tournament) repo,
        ) {
        super(repo);
    }
}
