
extern crate ferris_says;

fn main() {
    // let out = b"Hello fellow";
    // let width = 24;

    // let mut writer = BufWriter::new(stdout());
    // let stdout = stdout();
    // let message = String::from("Hello fellow");
    // let width = message.chars().count();

    // let mut writer = BufWriter::new(stdout.lock());
    // say(message.as_bytes(), width, &mut writer).unwrap();
    println!("{} days", 31);
    println!("{0}, this is {1}. {1}, this is {0}","Alice","Bob");
    println!("{} of {:b} people know binary, the other half doesn't", 1, 2);
    println!("{number:0>width$}", number=1, width=6);

    #[allow(dead_code)]
    #[derive(Debug)]
    struct Structure(i32);

    println!("This struct `{:#?}` won't print...", Structure(3));
}
