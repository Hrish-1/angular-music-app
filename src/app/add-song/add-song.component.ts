import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Music, music } from '../music';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss'],
})
export class AddSongComponent implements OnInit {
  songForm = this.fb.group({
    songId: ['', Validators.required],
    songName: ['', Validators.required],
    songImage: ['', Validators.required],
    artistName: ['', Validators.required],
    artistImage: ['', Validators.required],
    genre: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.songForm.invalid) {
      return;
    }
    const { songId, songName, songImage, artistName, artistImage, genre } =
      this.songForm.value;
    music.push({
      id: Number(songId),
      name: songName,
      genre: genre,
      image: songImage,
      singer: artistName,
      file: './assets/cheap-thrills.mp3',
      singerImage: artistImage,
      isFavourite: false,
      rating: 1,
    });
    console.log(this.songForm.value);
    this.songForm.reset();
    this.router.navigate(['songs']);
  }
}
