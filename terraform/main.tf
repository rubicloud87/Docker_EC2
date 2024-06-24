resource "aws_instance" "strapi" {
  ami                         = "ami-0f30a9c3a48f3fa79"
  instance_type               = "t2.medium"
  subnet_id                   = "subnet-0f8632da3b474a417"
  vpc_security_group_ids      = [aws_security_group.strapi_sg.id]
  key_name                    = "strapi_key2"
  associate_public_ip_address = true
  user_data                   = <<-EOF
                                #!/bin/bash
                                sudo apt update
                                sudo apt update && sudo apt install docker.io docker-compose -y
                                sudo systemctl enable docker && sudo usermod -aG docker $USER
                                git clone https://github.com/rubicloud87/Docker_EC2.git
                                cd Docker_EC2
                                docker-compose up -d
                                sleep 360
                                EOF

  tags = {
    Name = "Strapi_Server"
  }
}



resource "aws_security_group" "strapi_sg" {
  name        = "ec2-SG-strapi"
  description = "Strapi"

  vpc_id = "vpc-0d4da62efad50eb46" # Replace with your VPC ID

  // Inbound rules (ingress)
  ingress {
    description = "Allow HTTP inbound traffic"
    from_port   = 1337
    to_port     = 1337
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Allow traffic from all sources (for example)
  }

  ingress {
    description = "Allow SSH inbound traffic"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Replace with your specific IP or range
  }
  // Outbound rules (egress)
  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"] # Allow all outbound traffic to all destinations
  }
}

output "instance_ip" {
  value = aws_instance.strapi.public_ip
}


