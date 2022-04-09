extern crate ferris_says;
use ferris_says::say;
use std::io::{ stdout, BufWriter };
fn main() {
    // let out = b"Hello fellow";
    // let width = 24;

    // let mut writer = BufWriter::new(stdout());
    let stdout = stdout();
    let message = String::from("Hello fellow");
    let width = message.chars().count();

    let mut writer = BufWriter::new(stdout.lock());
    say(message.as_bytes(), width, &mut writer).unwrap();
}
