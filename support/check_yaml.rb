require 'yaml'

path = File.expand_path('../members', File.dirname(__FILE__))
code = 0

Dir.glob(path + '/*.yaml') do |f|
  begin
    File.open(f) do |data|
      YAML.load(data)
    end
  rescue Exception => e
    puts "Error in file #{f}:"
    puts e.message
    code = 1
  end
end

exit code
